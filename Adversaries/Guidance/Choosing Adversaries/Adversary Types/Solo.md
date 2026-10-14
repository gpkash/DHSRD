# SOLO

From a terrifying dragon capable of destroying cities to the evil that lurks beyond the threshold of the Mortal Realm, these powerful adversaries share little in common with each other, save for their purpose: to create an exciting encounter!

## Mechanics

Some Solos have the “Relentless” feature, which allows the GM to spotlight them multiple times during a GM turn. Others have multiple reactions that work in place of “Relentless”. Solo adversaries without these features should have other units with them or an environment that supports them. Because of the number of features a Solo has, they are more complex to run.

## Archetypal Example

When looking at the range of Solo adversaries, you might happen across the [[Juvenile Flickerfly]]. Their features build on each other in a very interesting way. If the flickerfly uses their “Mind Dance” action, their “Hallucinatory Breath” reaction is even more effective. At Tier 2, their attacks deal moderate damage, but with their “Peerless Accuracy” passive, the flickerfly can hit higher-[[Evasion]] targets more often. Most importantly, they can take the spotlight up to three times during a GM turn.

## Custom Solos

These adversaries might be bosses with loyal lieutenants or puzzling encounters the party must work around. They usually deal high damage, have tough defenses, and a large number of Hit Points. When an adversary is given the “Relentless” feature, consider how much damage they do with each attack—a creature with “Relentless (3)” should usually do less damage on a hit than a creature with “Relentless (2).”

## Make Your Own

Deep in the ruins of the Earliest Age lies a structure buried under rubble and scorched sand. Within it is a massive forge covered in eldritch invocations. Its crucible brims with energy stolen from distant stars. Guarding this forge is an inscrutable being of twisted metal and flesh. An amalgam of writhing limbs and clicking gears, this Malefacted Giant waits for those who would claim the Starforge. We’ll make them at Tier 2.

- Given their strange and unpredictable nature, 15 seems like an appropriate Difficulty.
- This adversary is somewhere between humanoid and machine, giving them solid defenses. Damage thresholds of Major 16/Severe 26 with 10 HP and 5 [[Stress]] will work well for that purpose.
- Because of their sheer size and strength, the giant should have a decent attack modifier at +3.
- Their writhing limbs make for an interesting, evocative weapon. Let’s make it deal **2d12+4** physical damage.
- Instead of having the “Relentless” feature, this adversary has the “Sweeping Dread” reaction, which allows them to make multiple attacks on a countdown that ticks down as the characters roll with [[Fear]]. As this is an aberrant, eldritch horror, we can lean into the weirdness of their being with features like “Mindbreaker” and “Behold the End.” These ramp up the oddity and let you express it in the game, bringing this adversary to life at the table.
- As the giant fights, they batter the minds of their opponents. Giving them a [[Fear]] Feature that pierces through their defenses creates additional tension at the table.

A Solo adversary with these traits might look like the [[Malefacted Giant]].

## SOLO ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Solo"
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
    name: Solo adversaries
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
