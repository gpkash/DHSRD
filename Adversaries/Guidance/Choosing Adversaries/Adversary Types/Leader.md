# LEADER

A Leader can be the antagonist of the whole campaign or just the current encounter—either way, they’re only as good as the allies who follow them. This adversary could be the boss of a local thieves’ guild or an evil knight whose army lays waste to the countryside. They bring the strength of their forces to bear against those who oppose them.

## Mechanics

A Leader can spotlight multiple allies in one move, buff them, or summon new combatants to the field, and they create dynamic combat by rallying and maneuvering their forces. But a Leader is also dangerous in their own right—they usually have some of the highest attributes for their tier of play, making them difficult to hit, harder to take down, and deadly when they land a blow. When you build an encounter with a Leader, the most important thing you can do to sell the fiction is to see what types of features they use and pair them with other adversaries who take advantage of those features.

## Archetypal Example

The [[Head Guard]] is an iconic Leader. Their “On My Signal” reaction starts a countdown that commands Archer Guards to attack with advantage against targets near them. However, this feature doesn’t function when there are no Archer Guards present in the scene. When attacking on their own, the Head Guard generally deals Major damage to Tier 1 PCs, but you can spend 2 [[Fear]] to use their “Rally Guards” action, spotlighting them and some of their allies to deal more damage. Because the cost for “Rally Guards” is so high, having enough allies for the Head Guard to take advantage of it is paramount. This is true for most Leaders—they need sufficient forces to be the greatest threat.

## Custom Leaders

A Leader should have stats that surpass those of other adversaries in the same tier. These adversaries are difficult to defeat because they deal more damage, have higher damage thresholds, and have a higher Difficulty. Their main weakness is that much of their strength comes from their allies. Take those away and a Leader will struggle.

## Making Your Own

Wildborne bandit gangs are sometimes led by thieves known as Briarwhips. These experienced rangers know the verdant woods and its bounty. When word of well-guarded treasure reaches a gang, a Briarwhip is chosen to lead the heist. We’ll make them at Tier 1.

- They are fierce and nimble rangers, so a Difficulty of 14 suits them. You could let them increase their Difficulty, similar to the Bone domain’s “Ferocity” feature.
- They wear scale-like stone armor that would give them higher damage thresholds. Let’s do Major 9/Severe 14. Additionally, we’ll give them 6 HP and 4 [[Stress]].
- They have deadly accuracy with their whip, giving them an attack modifier of +3.
- They attach poisoned thorns to their whip, so their weapon deals more damage, but the application might be less consistent. To represent this, we choose to use 1d10+2 for their damage.
- We’ll give them a few Experiences that reflect both their Leader type and their background as a ranger.
- They command their subordinates through the use of hand signals or whistles. Giving them the ability to command their allies to sink back into the underbrush could be a great [[Fear]] Feature, but consider how that would change the scene. If all their allies are Hidden, the Briarwhip would become the character’s only target, so we want to give them the ability to take the hits headed their way. Borrowing from the Bone domain’s “Brace” feature, we can have them mark a [[Stress]] to lessen the blow.

A Leader adversary with these traits might look like the [[Briarwhip]].

## LEADER ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Leader"
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
    name: Leader adversaries
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
