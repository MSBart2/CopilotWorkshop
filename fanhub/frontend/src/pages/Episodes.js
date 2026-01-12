// Episodes page
// NOTE: This file uses .js extension while others use .jsx - inconsistent!
// Also mixes different patterns

import React, { useState, useEffect, useCallback } from 'react';
import EpisodeList from '../components/EpisodeList';
import { episodesApi } from '../services/api';

// Using CSS-in-JS object but NOT styled-components
const pageStyles = {
  container: {
    padding: '1rem 0',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#1a1a2e',
    marginBottom: '1rem',
  },
  filterBar: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: '1rem',
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  seasonButton: {
    padding: '0.5rem 1.5rem',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  activeButton: {
    background: '#e94560',
    color: 'white',
  },
  inactiveButton: {
    background: '#f0f0f0',
    color: '#333',
  },
};

let episodeCache = null;
let cacheTimestamp = null;

// Functional component with hooks
const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract unique seasons from episodes
  const extractSeasons = useCallback((episodeList) => {
    const seasonMap = new Map();
    episodeList.forEach(ep => {
      if (ep.season_number && !seasonMap.has(ep.season_number)) {
        seasonMap.set(ep.season_number, {
          number: ep.season_number,
          id: ep.season_id,
        });
      }
    });
    return Array.from(seasonMap.values()).sort((a, b) => a.number - b.number);
  }, []);

  // Load episodes
  const loadEpisodes = useCallback(async (seasonId = null) => {
    // Attempt to use cache (but cache doesn't account for seasonId!)
    const now = Date.now();
    if (episodeCache && cacheTimestamp && (now - cacheTimestamp) < 30000) {
      // BUG: Using cached data regardless of which season was requested
      setEpisodes(episodeCache);
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const params = {};
      if (seasonId) {
        params.season_id = seasonId;
      }
      
      const response = await episodesApi.getAll(params);
      
      // Handle different response formats (backend inconsistency!)
      const data = response.data.data || response.data;
      
      // Update cache (but doesn't track which season this is for!)
      episodeCache = data;
      cacheTimestamp = Date.now();
      
      setEpisodes(data);
      
      // Only extract seasons on initial load
      if (!seasonId && data.length > 0) {
        setSeasons(extractSeasons(data));
      }
    } catch (err) {
      console.error('Failed to load episodes:', err);
      setError('Failed to load episodes. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }, [extractSeasons]);

  // Initial load
  useEffect(() => {
    loadEpisodes();
  }, [loadEpisodes]);

  // Handle season filter
  const handleSeasonClick = (season) => {
    if (selectedSeason === season?.id) {
      // Deselect - show all
      setSelectedSeason(null);
      loadEpisodes();
    } else {
      setSelectedSeason(season.id);
      loadEpisodes(season.id);
    }
  };

  // Handle episode click
  const handleEpisodeClick = (episode) => {
    // TODO: Navigate to episode detail page
    console.log('Clicked episode:', episode);
    alert(`Episode detail page not implemented yet!\n\nEpisode: ${episode.title}`);
  };

  // Filter episodes by selected season (client-side backup)
  const filteredEpisodes = selectedSeason
    ? episodes.filter(ep => ep.season_id === selectedSeason)
    : episodes;

  return (
    <div style={pageStyles.container}>
      <div style={pageStyles.header}>
        <h1 style={pageStyles.title}>Episodes</h1>
        
        {seasons.length > 0 && (
          <div style={pageStyles.filterBar}>
            <button
              style={{
                ...pageStyles.seasonButton,
                ...(selectedSeason === null ? pageStyles.activeButton : pageStyles.inactiveButton),
              }}
              onClick={() => handleSeasonClick(null)}
            >
              All Seasons
            </button>
            {seasons.map((season) => (
              <button
                key={season.number}
                style={{
                  ...pageStyles.seasonButton,
                  ...(selectedSeason === season.id ? pageStyles.activeButton : pageStyles.inactiveButton),
                }}
                onClick={() => handleSeasonClick(season)}
              >
                Season {season.number}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && (
        <div style={{
          background: '#ffebee',
          color: '#c62828',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}>
          {error}
        </div>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
          Loading episodes...
        </div>
      ) : (
        <EpisodeList 
          episodes={filteredEpisodes}
          onEpisodeClick={handleEpisodeClick}
        />
      )}
    </div>
  );
};

export default Episodes;
