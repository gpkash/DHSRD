# SOCIAL ENVIRONMENTS

**Socials** are locations that primarily present interpersonal challenges.

## SOCIAL ENVIRONMENTS

```base
filters:
  and:
    - kind == "environment"
    - type == "Social"
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
    name: Social environments
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
