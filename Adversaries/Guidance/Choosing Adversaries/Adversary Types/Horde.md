# HORDE

Whether a swarm of rats beneath a tavern or a pack of wolves prowling the forest, a Horde represents a massive group of enemies in an easy-to-run way.

## Mechanics

Hordes are groups of weaker enemies. They deal high damage initially, but less once they’ve marked at least half of their Hit Points (rounded up). Many of them have interesting passives or reactions that capture their role in the fiction. Every Horde has the “Horde” passive, which is unique to this adversary type:

> **Horde (X) - Passive:** When the Horde has marked half or more of their HP, their standard attack deals X damage instead.

Hordes also have a unique notation of (Y/HP) next to their type in their stat block. The Y represents the number of creatures represented by each Hit Point the Horde has. For example, 2/HP means that every Hit Point represents two members of the Horde. This narrative detail allows you to quickly describe the number of foes brought down with each attack. For example, if a PC deals 2 Hit Points to the Horde, they take down four enemies with their attack. Hordes work well in theater-of-the-mind play because you only need to use a single unit in combat to represent many foes.

## Archetypal Example

While every Horde has the same basic mechanics, the [[Zombie Pack]] is a good example of how to capture the fiction with those features. Their damage is near the top of the tier, but they’re less likely to hit with their -1 attack modifier. Since the Horde’s purpose in the narrative is to overwhelm the characters, it’s fitting that the Zombie Pack has a reaction called “Overwhelm” that allows them to mark a [[Stress]] and attack a creature who struck them.

## Custom Hordes

Hordes have low Difficulty and attack modifiers, as well as average damage thresholds. Their damage is initially high, then drops by about half once they’ve taken substantial damage.

## Making Your Own

Delving deep into magical mines sometimes exacts a price more permanent than exhaustion. The spirits of miners that perished as a result of their own greed still linger, ever covetous. We’ll make them at Tier 3.

- Because of their large numbers, the miners are much easier to hit. However, they’re also ghostly, so their Difficulty might be only slightly lower than average at a 16.
- We’ll put their thresholds on the low end at Major 15/Severe 25, as their ties to the Mortal Realm are tenuous. Additionally, we’ll give them 6 Hit Points and 3 [[Stress]].
- These miners might have some skill with their tools, but they aren’t trained for combat. At best, they might have a +1 attack modifier.
- As these ghosts once did in life, they exploit any weakness. Their attacks are devastating because of their numbers. Putting their standard attack at 3d12+10 means they deal high damage, which drops to 3d6+5 when they’re at half HP or fewer.
- Trapped by their greed, the miners are obsessed with gaining wealth. Giving them a feature that demonstrates their ravenous hunger against targets with gold plays into the fiction we’ve established.

A Horde adversary with these traits might look the [[Covetous Miners]].

## HORDE ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Horde"
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
    name: Horde adversaries
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
