<!-- Reference implementation for Module 4, Exercise 4.2: Language-Specific Instructions -->
<!-- This example demonstrates: Python-specific patterns with .py file matching -->

---

name: python-standards
description: 'PEP 8 and Python best practices'
applyTo: '\*_/_.py'

---

# Python Development Standards

Follow PEP 8 and Python best practices for all `.py` files.

## Code Style

**Naming conventions**:

```python
# Variables and functions: snake_case
character_name = "Walter White"
def fetch_character_data():
    pass

# Classes: PascalCase
class CharacterService:
    pass

# Constants: UPPER_SNAKE_CASE
MAX_RESULTS = 100
API_BASE_URL = "https://api.example.com"
```

**Indentation**: 4 spaces (no tabs)

**Line length**: Maximum 79 characters for code, 72 for comments

## Imports

**Order**: Standard library → third-party → local

```python
import os
import sys

import requests
from flask import Flask

from models import Character
from utils import format_date
```

## Type Hints

**Use type hints for functions**:

```python
def fetch_character(character_id: int) -> dict:
    """Fetch character by ID."""
    return {"id": character_id, "name": "..."}

def process_episodes(episodes: list[dict]) -> list[str]:
    """Extract episode titles."""
    return [ep["title"] for ep in episodes]
```

## Docstrings

**Google-style docstrings**:

```python
def calculate_rating(reviews: list[int]) -> float:
    """Calculate average rating from reviews.

    Args:
        reviews: List of integer ratings (1-5)

    Returns:
        Average rating as float

    Raises:
        ValueError: If reviews list is empty
    """
    if not reviews:
        raise ValueError("Reviews list cannot be empty")
    return sum(reviews) / len(reviews)
```

## Error Handling

**Specific exceptions**:

```python
try:
    character = fetch_character(id)
except requests.HTTPError as e:
    print(f"HTTP error: {e}")
except ValueError as e:
    print(f"Invalid input: {e}")
```

## Pythonic Patterns

**List comprehensions**:

```python
# ✅ Correct
names = [char["name"] for char in characters if char["active"]]

# ❌ Avoid
names = []
for char in characters:
    if char["active"]:
        names.append(char["name"])
```

**Context managers**:

```python
with open("data.json") as f:
    data = json.load(f)
```

**Dictionary methods**:

```python
character.get("biography", "No biography available")
```
