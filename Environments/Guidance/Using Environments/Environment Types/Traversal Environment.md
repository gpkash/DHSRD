# TRAVERSAL ENVIRONMENTS

**Traversals** are dangerous locations where moving around the space itself is a challenge. Threats and obstacles the PCs encounter there will most likely be physical in nature.

## TRAVERSAL ENVIRONMENTS

```base
filters:
  and:
    - kind == "environment"
    - type == "Traversal"
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
    name: Traversal environments
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
