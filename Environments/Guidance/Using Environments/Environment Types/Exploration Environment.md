# EXPLORATION ENVIRONMENTS

**Explorations** are wondrous locations with mysteries and marvels to discover.

## EXPLORATION ENVIRONMENTS

```base
filters:
  and:
    - kind == "environment"
    - type == "Exploration"
properties:
  file.name:
    displayName: Environment
  note.tier:
    displayName: Tier
  note.difficulty:
    displayName: Difficulty
  note.source:
    displayName: Source
views:
  - type: table
    name: Exploration environments
    order:
      - file.name
      - tier
      - difficulty
      - source
    sort:
      - property: tier
        direction: ASC
      - property: file.name
        direction: ASC
```
