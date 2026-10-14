# SKULKS

Skulks come in different types and have different abilities based on their lore. They can be ambushers who lurk in the shadows, skirmishers specializing in hit-and-run tactics, or elusive adversaries who confuse the party through mundane or magical means.

## Mechanics

A wide breadth of adversaries can fit into the Skulk category, typically those who use misdirection and movement during combat. They might not do damage on every activation, instead opting to hinder the party’s ability to move freely through the battlefield or debilitate them with a temporary condition. There are several ways to take advantage of these adversaries in combat: you might open with an ambush from a group of Skulks, or a Leader might summon one midway through the battle, placing them close to PCs who try to stay away from the fight. Like Ranged adversaries, most Skulks don’t want to stay within Melee range; they strike and move away whenever possible. If you want your Skulks to be particularly cunning, they should ignore warriors, seraphs, and guardians, instead pursuing softer targets such as wizards and bards.

## Archetypal Example

The [[Jagged Knife Shadow]] is a good example of a Skulk that uses hit-and-run tactics. They can divert attention by using their “Cloaked” action to become Hidden, then take advantage of their “Backstab” passive to increase their damage. However, they can only use this combo every other turn.

## Custom Skulk

Skulks have average or higher attack modifiers and Difficulties. They usually deal moderate damage, but they can deal high damage when they attack an isolated or compromised target. Their own damage thresholds are typically in the fragile range.

## Make Your Own

The Frostcage Peaks are treacherous at the best of times, when snow is high and the pack has broken up. The warmth of the day brings out dangerous predators searching for an easy meal. Because of their command of the mountain caves and the chilling skies, Glitterwyrms have become the apex predators of this space. We’ll make them at Tier 2.

- They are agile fliers, able to deftly maneuver through the frozen skies despite punishing winds. It makes sense to put their Difficulty at 14.
- As ambush hunters, Glitterwyrms have evolved to secrete an oil from their scales that freezes to a mirror-like finish. While this trait helps them to surprise their prey, they are quite fragile. Damage thresholds of Major 9/Severe 18 with 5 Hit Points and 4 [[Stress]] are appropriate here.
- These wyrms have keen vision, so a +2 attack modifier is appropriate.
- They approach quietly and dive-bomb into their prey, hoping to push them into icy depths and fish out the remains later. Because of this, their bite isn’t as strong as other wyrms’ might be—it only deals **2d8+3** damage.
- Because they’re flying predators with sharp vision, we’ll give them a few Experiences that reflect those traits.
- The secretion from their tails turns into barbs as they hibernate up on the high basalt cliffs that surround the passage. We can make an “Icicle Barb” action that allows them to use these as weapons to pin down their prey.

A Skulk adversary with these traits might look like the [[Glitterwyrm]].

## SKULK ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Skulk"
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
    name: Skulk adversaries
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
