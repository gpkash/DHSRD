# SOCIAL

Whether it’s a meeting with a reticent spy or an interrogation of a corrupt leader, not all encounters are solved with the edge of a blade. When the party is faced with a Social adversary, they enter a battle of wits.

## Mechanics

When planning a social encounter, you should pay particular attention to the motives and tactics of these adversaries. What are the characters trying to get from this encounter? Why would the adversary want to keep this information from them? What would tip the balance and force an adversary’s hand? If you have time to establish this NPC prior to their introduction into the story, let their goals and tactics guide the interaction, and give them a memorable quirk to distinguish them in the PCs’ minds.

## Archetypal Example

A social encounter that many players have experienced is haggling with a merchant. These traders are shrewd, squeezing every coin they can out of a deal. The [[Merchant]] Social adversary uses their features to fluctuate prices and cause characters haggling poorly with them to mark [[Stress]].

## Custom Socials

While their physical stats might be low, Social adversaries might have other means of putting up defenses against the party. These defenses typically come in the form of passive features. The adversaries in this book are a good starting point for creating social encounters, but many times you’ll want to create your own.

## Make Your Own

A nearby forest settlement is led by elders who have forged a great connection with nature. In gaining this power, the village leaders become an enigma to their people, hidden behind veils of shadow. We’ll make them at Tier 1.

- Their hearts and wills are strong, and they wish only for the good of their people. Let’s give them a Difficulty of 14.
- Because they aren’t combat-focused, we’ll give them 2 Hit Points. That means they only need a Major threshold, so let’s set that at 6. To reflect their wisdom and patience, we’ll give 4 [[Stress]].
- Many of these elders hold peace above all else and are not trained in the ways of violence. This would make their attack modifier a -2.
- They might carry an old stick or a farm implement covered in vines from the bramble, but everyone knows they’re just for show. A weapon like this would deal 1d4+2 physical damage.
- These elders have lived full lives, expressed by having several Experiences with larger bonuses. Their experience can show up in their passive, too—they’re world-wise and insightful, so they have advantage in these social situations.
- The people of these settlements have learned to trust the will of their elders, cryptic as it can sometimes be. We’ll create an action for social encounters that mechanizes this dynamic called “No Hospitality.” They can also invoke the peace of the meadow in dire situations. This feature seems combat-oriented, but it serves a social purpose—to showcase the elders’ power, whether used against PCs or the elders’ foes. Either way, the “There Will Be Peace” reaction is a one-time-use, evocative feature that conveys their role in their village.

A Social adversary with these traits might look like the [[Village Elder]].

## SOCIAL ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Social"
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
    name: Social adversaries
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
