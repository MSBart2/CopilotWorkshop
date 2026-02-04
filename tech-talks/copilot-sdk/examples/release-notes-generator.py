#!/usr/bin/env python3
"""
Release Notes Generator using GitHub Copilot SDK

Analyzes git commit history between tags and generates customer-facing
release notes with proper categorization and value framing.

Usage:
    python release-notes-generator.py --from v1.2.0 --to v1.3.0
    python release-notes-generator.py --from v1.2.0  # Uses HEAD as target
"""

import argparse
import subprocess
import sys
from github_copilot_sdk import CopilotClient


def get_commit_history(from_tag, to_tag):
    """Fetch git commit history between tags."""
    try:
        result = subprocess.run(
            ['git', 'log', f'{from_tag}..{to_tag}', '--pretty=format:%H|%s|%b', '--no-merges'],
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Error fetching git history: {e}", file=sys.stderr)
        sys.exit(1)


def generate_release_notes(commit_history, from_tag, to_tag):
    """Use Copilot SDK to generate release notes from commit history."""
    client = CopilotClient()
    
    prompt = f"""
Analyze the git commit history between {from_tag} and {to_tag} and generate professional release notes.

Requirements:
1. Categorize commits into: Features, Fixes, Breaking Changes, Security Updates, Performance Improvements
2. Focus on customer/user value, not technical implementation details
3. Use clear, non-technical language where possible
4. Highlight security updates prominently
5. Include migration steps for breaking changes
6. Format as markdown suitable for GitHub releases
7. Include emoji for readability: ✨ Features, 🐛 Fixes, ⚠️ Breaking Changes, 🔒 Security, ⚡ Performance

Commit History:
{commit_history}

Generate the release notes now:
"""
    
    response = client.chat(prompt)
    return response.text


def main():
    parser = argparse.ArgumentParser(
        description='Generate release notes from git history using Copilot SDK'
    )
    parser.add_argument('--from', dest='from_tag', required=True, help='Starting tag (e.g., v1.2.0)')
    parser.add_argument('--to', dest='to_tag', default='HEAD', help='Ending tag or commit (default: HEAD)')
    parser.add_argument('--output', help='Output file (default: stdout)')
    
    args = parser.parse_args()
    
    print(f"📖 Fetching commits from {args.from_tag} to {args.to_tag}...", file=sys.stderr)
    commit_history = get_commit_history(args.from_tag, args.to_tag)
    
    if not commit_history:
        print(f"No commits found between {args.from_tag} and {args.to_tag}", file=sys.stderr)
        sys.exit(0)
    
    print(f"✨ Generating release notes with Copilot SDK...", file=sys.stderr)
    release_notes = generate_release_notes(commit_history, args.from_tag, args.to_tag)
    
    if args.output:
        with open(args.output, 'w') as f:
            f.write(release_notes)
        print(f"✅ Release notes written to {args.output}", file=sys.stderr)
    else:
        print("\n" + "="*80 + "\n", file=sys.stderr)
        print(release_notes)
        print("\n" + "="*80 + "\n", file=sys.stderr)


if __name__ == '__main__':
    main()
