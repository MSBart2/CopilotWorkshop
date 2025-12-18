const { API_CONFIG } = require("../config/constants");

/**
 * GitHub API client for repository operations
 * Uses GitHub REST API v3
 */
class GitHubClient {
  constructor(token) {
    this.token = token || process.env.GITHUB_TOKEN;
    this.baseUrl = "https://api.github.com";
    this.headers = {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${this.token}`,
    };
  }

  /**
   * Make an authenticated request to GitHub API
   * @param {string} endpoint - API endpoint (without base URL)
   * @param {Object} options - Fetch options
   * @returns {Promise<Object>} Response data
   */
  async _request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: { ...this.headers, ...options.headers },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }

  // TODO: Implement fetchRepository, createIssue, listPullRequests
  // Exercise: Use Copilot to implement these GitHub API methods

  /**
   * Fetch repository information
   * @param {string} owner - Repository owner
   * @param {string} repo - Repository name
   * @returns {Promise<Object>} Repository data
   */
  // async fetchRepository(owner, repo) {

  /**
   * Create a new issue
   * @param {string} owner - Repository owner
   * @param {string} repo - Repository name
   * @param {Object} issue - Issue data
   * @param {string} issue.title - Issue title
   * @param {string} issue.body - Issue body
   * @param {string[]} issue.labels - Issue labels (optional)
   * @returns {Promise<Object>} Created issue data
   */
  // async createIssue(owner, repo, issue) {

  /**
   * List pull requests for a repository
   * @param {string} owner - Repository owner
   * @param {string} repo - Repository name
   * @param {Object} options - Filter options
   * @param {string} options.state - 'open', 'closed', or 'all' (default: 'open')
   * @param {number} options.perPage - Results per page (default: 30)
   * @returns {Promise<Object[]>} Array of pull requests
   */
  // async listPullRequests(owner, repo, options = {}) {

  /**
   * Get contents of a file in a repository
   * @param {string} owner - Repository owner
   * @param {string} repo - Repository name
   * @param {string} path - File path
   * @param {string} ref - Branch, tag, or commit (optional)
   * @returns {Promise<Object>} File contents (base64 encoded)
   */
  // async getFileContents(owner, repo, path, ref) {

  /**
   * List repository branches
   * @param {string} owner - Repository owner
   * @param {string} repo - Repository name
   * @returns {Promise<Object[]>} Array of branches
   */
  // async listBranches(owner, repo) {

  /**
   * Get the authenticated user
   * @returns {Promise<Object>} User data
   */
  // async getAuthenticatedUser() {
}

module.exports = GitHubClient;
