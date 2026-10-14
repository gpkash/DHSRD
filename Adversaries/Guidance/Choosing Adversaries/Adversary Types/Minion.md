# MINIONS

A half-dozen imps tossed away in a single swipe, a room full of reanimated skeletons—no matter their form, Minions increase the scale of a battle without bogging down play.

## Mechanics

Each Minion has 1 Hit Point and the following features:

> **Minion (X) - Passive:** This adversary is defeated when they take any damage. For every X damage a PC deals to this adversary, defeat an additional Minion within range the attack would succeed against.
>
> **Group Attack - Action:** Spend a [[Fear]] to choose a target and spotlight all adversaries with this name within a certain range of them. Those Minions move into Melee range of the target and make one shared attack roll. On a success, they deal X damage each. Combine this damage.

The “Minion” passive creates cinematic experiences at the table while ensuring these adversaries are easily defeated. Each Minion has a different amount of damage that triggers their “Minion” passive, as defined by the number in the feature’s heading. For example, the [[Giant Rat]]’s feature says “Minion (3),” which means that if an attack deals 3 damage to them, the initial target is destroyed, and another Minion within range who the attack would succeed against is also defeated. At 6 damage, two additional Minions within range are defeated, and so on. Tell the attacking PC which other Minions within range the attack would succeed against and let them choose which Minions they defeat. For example, if a PC deals 3 damage to a Giant Rat (Difficulty 10) and there’s a Rotted Zombie (Difficulty 8) nearby, the PC can choose to defeat the Rotted Zombie in addition to the initial Giant Rat. It’s important to note that some weapons have greater range than others, making ranged attackers very effective against Minions.

The “Group Attack” action allows the Minions to attack using only one roll. This speeds up play significantly, as you simply add up the damage of many attacks rather than rolling for each individual attack.

## Archetypal Example

The Giant Rat is an example of a typical Minion. Other than the numbers in their stat blocks, Minions vary little from adversary to adversary, as they don’t tend to have other distinguishing features. When Minions do have unique features, they should be reserved for cinematic moves that make sense in the fiction (such as the Tangle Bramble Minion’s “Drain and Multiply” reaction) or stronger Minions (such as the Hallowed Soldier’s “Divine Flight” passive or the Fallen Shock Troop’s “Aura of Doom” passive).

## Custom Minions

In addition to the previous information, Minions have lower Difficulty and do fixed damage.

## Making Your Own

The [[Demon Of Hubris]] is a Leader who demands perfection from those beneath them. Who might this sneering king of the Circles Below have as servants to lord over? Idolizing Imps that snivel and bow in deference make perfect sense. We’ll make them at Tier 3.

- Minions tend to have a low Difficulty for their tier, but these are nimble adversaries, so we’ll give them a Difficulty of 17.
- Because they are Minions, they have 1 HP and 1 [[Stress]].
- The imps spend their hours idolizing their leader and doing little else. An attack modifier of +0 feels appropriate.
- You want Minions to do significant damage at the beginning of a combat, but much less as their numbers thin. Let’s do 7 physical damage per Minion.
- In that case, they’re likely more fragile—we can incorporate that into their “Minion” passive so the PCs fell many of them in a single blow. “Minion (8)” feels appropriate.

A Minion adversary with these traits might look like the [[Giant Rat]] or [[Idolizing Imp]].

## MINION ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Minion"
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
    name: Minion adversaries
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
