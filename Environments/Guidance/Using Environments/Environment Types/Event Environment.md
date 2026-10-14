# EVENT ENVIRONMENTS

**Events** are defined more by the activity taking place than the space they take place in.

## EVENT ENVIRONMENTS

```base
filters:
  and:
    - kind == "environment"
    - type == "Event"
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
    name: Event environments
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
