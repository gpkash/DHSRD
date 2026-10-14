# SUPPORT

A Support adversary might be a druid who creates brambles and thorns that slow down pursuers, a bard that inspires their allies to greatness, or any other unit that buffs allies, inflicts conditions, or imposes unique status effects.

## Mechanics

Supports are as varied in their abilities as Leaders or Solos. They might bolster an ally or stop foes in their tracks. When selecting adversaries for an encounter, limit the use of Support adversaries—their defeat should be an important part of the tactical calculation. Protect them with Standard adversaries and distract PCs with higher-damage targets, such as a Bruiser or Ranged adversary.

## Archetypal Example

The [[Cult Adept]] is a great example of what a Support can do. They force targets to mark [[Stress]] with their attacks, buff allies with resistance to damage, and restrain their foes. They also clear a [[Stress]] when a PC rolls a failure with [[Fear]], which plays into their fiction very well.

## Custom Support

Supports have similar stats to Standards, if not slightly weaker. They do low damage and have middling Hit Points. As they usually need to mark [[Stress]] to use their actions, they typically have higher [[Stress]] than other adversaries.

## Make Your Own

Many woods are tended to by powerful practitioners of nature magic called Forest Druids. They live in hollowed roots, polished caves, or simple thatched huts. We’ll make them at Tier 1.

- We’ll make them slightly easier to hit because they are a Support adversary, granting them a Difficulty of 11.
- Forest Druids often wear the wood and lichen of the forests as armor. Thresholds of Major 6/Severe 10 with 4 Hit Points and 5 [[Stress]] fits their nature.
- They’re likely to carry standard weapons, so we’ll give them an attack modifier of +0.
- Similarly, we’ll limit their damage to mostly Minor, dealing **1d4+2**.
- These druids seek balance in nature, so an action that can undo the effects of a spell or condition on an ally makes sense. Additionally, the druid could leverage their understanding of the forest as a living entity, using its power to weaken their enemies. Perhaps they also summon the barbs of the wandering briar to stymie their foes.

A Support adversary with these traits might look like the [[Forest Druid]].

## SUPPORT ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Support"
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
    name: Support adversaries
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
