# BRUISER

A towering giant, a muscle-bound bodyguard for a devious merchant, a hulking construct with fists of iron—this is the Bruiser. These heavyweights can take significant punishment and deal powerful blows.

## Mechanics

Bruisers are close-quarter combatants. They usually engage the party’s melee characters while other adversaries attack from range. They deal high damage and often use area attacks. Sometimes they have the “Slow” feature to play up their lumbering nature, or features that move the PCs around to display their power. If you’re using minis in your encounters, consider ones with larger bases to convey their size—bigger minis usually imply a larger threat!

## Archetypal Example

The [[Minotaur Wrecker]] is a paramount example of the Bruiser: big, lumbering, and extremely dangerous. At Tier 2, these juggernauts typically deal Major damage and can land Severe blows on more lightly armored PCs. Their “Ramp Up” passive means they’re more costly to spotlight, but they can attack all targets within range with their standard attack. With their “Gore” action, they charge into combat and make dents in armored units.

## Custom Bruisers

When creating a Bruiser, keep in mind the following guidelines. Offensively, a Bruiser’s attack modifiers are usually average or lower, and most of their attacks deal Major or Severe damage (as appropriate for their tier). Defensively, they have average or lower Difficulty, higher than average Hit Points, and slightly higher than average damage thresholds.

## Making Your Own

Imagine an ogre rising from the grave—let’s call them a Dire Wight! This hulking creature might be found feasting on their latest kill or patrolling the outskirts of an ancient castle. This powerful guardian carries a terrifying two-handed mace enchanted with the last cries of their victims. We’ll make them at Tier 3.

- Since the wight is a larger, lumbering creature and thus easy to target, a Difficulty of 15 works well.
- We want to make the wight easier to hit, but harder to damage, so let’s give them a Major threshold of 26, and a Severe threshold of 42. We can also give them 8 HP and 4 [[Stress]].
- Because they are so big, the wight doesn’t attack as accurately, giving them a slightly below-average attack modifier of +2.
- The damage from these attacks should always have an impact when they connect, so we’ll use the impressive damage pool of 3d12+5.
- Because we want them to feel reckless and powerful, let’s make their Experience a +3 in Throw.
- The wight wields a massive weapon, so taking a swing at multiple targets is a fitting action. The weapon’s frightening nature might have an effect as well, so let’s have it cause PCs to mark a [[Stress]] when it hits. We can also play up the wight’s undead nature by saying that heavy-hitting attacks against this foe have an unnerving effect on the PCs, as they watch the creature’s rotting skin split open. To make it less overpowered, let’s make the feature cost the wight a [[Stress]].

A Bruiser adversary with these features might look like the [[Dire Wight]].

## BRUISER ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Bruiser"
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
    name: Bruiser adversaries
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
