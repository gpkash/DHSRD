# STANDARD

The town guard, the zombie, the faction agent—Standard adversaries represent the average of their peers and are the backbone of any encounter.

## Mechanics

Standard adversaries don’t offer heavy damage or amazing defenses. Instead, they fill out the ranks of a combat. They’re best utilized as a bulwark that prevents the PCs from reaching their Ranged and Support allies. They might also be a good choice for a Leader to bring into combat to replenish their forces. When creating your own adversaries, you might make Standard enemies for a faction first, then build the rest of the enemies to synergize with their abilities. Standard adversaries might be average, but they don’t need to be boring.

## Archetypal Example

The [[Bladed Guard]] could be one of the first adversaries your party meets in a campaign. They stand at the gates, protect the townsfolk, and patrol the city’s streets. Their “Shield Wall” passive immediately tells you that more of them is always better, while their “Detain” action conveys their purpose, lining up well with their motives and tactics.

## Custom Standards

Most everything about a Standard adversary is going to be in the average range for the tier. You can use the tables in the upcoming “Improvising Adversaries” section to choose the average for their attack modifier and the moderate damage dice for their tier. This makes them simple to create. Where Standards shine is in the features that define their role in the fiction, such as the Bladed Guard’s “Shield Wall,” the Spectral Guardian’s “Ghost,” or the Vampire’s “Draining Bite.”

## Make Your Own

Wanderborne communities speak of a legendary troupe that pops up at a crossroads, luring travelers into a show unlike anything they’ve ever seen. Only a rare few return to tell the tale of the Empty Sky Circus. The troupe is filled with Bladedance Jesters, who constantly move to a song only they can hear. We’ll make them at Tier 4.

- The jesters are quick and nimble, so to represent this, we’ll give them a Difficulty of 19.
- They likely wear little armor, so we can do a low Major threshold, and a higher Severe threshold. Major 22/Severe 50 should work well. The rest of their numbers will be average; we’ll use 5 Hit Points and 3 [[Stress]].
- Bladedance Jesters are the Empty Sky Circus’s first line of defense, more focused on protection than destruction. We’ll give them a +3 attack modifier.
- We’ll want a weapon that represents them—something that always needs to be in motion or move fluidly to attack. Their Chained Chakrams convey that sense of motion and grace and, as a bonus, double as a performing prop. We’ll put their attack damage at **4d8+5**.
- To fulfill their role as a Standard adversary, they need to be a plausible threat, which could include interfering with the characters’ movement. To do this, we can have their chakrams pull a target closer. We’ll also give the jester a reaction to dodge the brunt of some attacks as they move to an unheard dance from realms beyond.

A Standard adversary with these traits might look like the [[Bladedance Jester]].

## STANDARD ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Standard"
properties:
  file.name:
    displayName: Adversary
  note.tier:
    displayName: Tier
  note.difficulty:
    displayName: Difficulty
  note.source:
    displayName: Source
views:
  - type: table
    name: Standard adversaries
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
