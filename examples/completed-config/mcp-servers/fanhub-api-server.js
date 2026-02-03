#!/usr/bin/env node

// MCP server that wraps FanHub's backend API
// Enables Copilot to query live API endpoints for validation

const http = require('http');

const API_BASE_URL = process.env.FANHUB_API_URL || 'http://localhost:3001';

function queryAPI(endpoint) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 400) {
          reject(new Error(`API returned ${res.statusCode}: ${data}`));
        } else {
          resolve(JSON.parse(data));
        }
      });
    }).on('error', reject);
  });
}

// Stdio MCP protocol handler
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', async (line) => {
  try {
    const request = JSON.parse(line);
    
    if (request.method === 'tools/list') {
      const response = {
        tools: [
          {
            name: 'query_shows',
            description: 'Get all shows from FanHub backend API',
            inputSchema: {
              type: 'object',
              properties: {}
            }
          },
          {
            name: 'query_show_by_id',
            description: 'Get single show with full details',
            inputSchema: {
              type: 'object',
              properties: { 
                id: { type: 'string', description: 'Show ID' }
              },
              required: ['id']
            }
          },
          {
            name: 'query_characters',
            description: 'Get all characters from FanHub backend API',
            inputSchema: {
              type: 'object',
              properties: {
                show_id: { type: 'string', description: 'Filter by show ID (optional)' }
              }
            }
          }
        ]
      };
      console.log(JSON.stringify(response));
      return;
    }
    
    if (request.method === 'tools/call') {
      const tool = request.params.name;
      const args = request.params.arguments || {};
      
      let result;
      if (tool === 'query_shows') {
        result = await queryAPI('/api/shows');
      } else if (tool === 'query_show_by_id') {
        result = await queryAPI(`/api/shows/${args.id}/full`);
      } else if (tool === 'query_characters') {
        const endpoint = args.show_id 
          ? `/api/characters?show_id=${args.show_id}`
          : '/api/characters';
        result = await queryAPI(endpoint);
      } else {
        throw new Error(`Unknown tool: ${tool}`);
      }
      
      console.log(JSON.stringify({ result }));
    }
  } catch (error) {
    console.error(JSON.stringify({ error: error.message }));
  }
});

console.error('FanHub API MCP Server started (listening on stdio)');
console.error(`Backend URL: ${API_BASE_URL}`);
