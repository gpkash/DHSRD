# RANGED

A Ranged adversary could be a spellcaster firing necrotic bolts of energy or an archer on the battlement raining down arrows on an advancing army. These enemies hit hard while staying away from direct conflict.

## Mechanics

Because of their superior attack range, a Ranged adversary’s presence on the battlefield divides the characters’ attention. When positioning them, spread them out and put other threats between them and the party. Have them use the terrain to their advantage when they attack, keeping them on the edge of their effective range wherever possible. When you build encounters, consider the party’s abilities: Ranged adversaries work well against flying characters and can be difficult for melee-focused PCs to deal with.

## Archetypal Example

A great example of a Ranged adversary is the [[War Wizard]]. This enemy doesn’t evoke the traditional idea of a Ranged enemy, but they have all the hallmarks of one: They can move within Far range, they deal lethal damage, and it would take two hits from most PCs to bring them down. It’s just a matter of getting to them.

## Custom Ranged

These adversaries have higher than average attack modifiers, lower damage thresholds, and fewer Hit Points. They hit hard but go down quickly once engaged.

## Make Your Own

In the frozen lands at the top of the world, survival is all that matters. To survive in the most dangerous places, a hunter must have ice in their veins and an unshakable nerve. The settlements in this bitter wasteland depend on these explorers to survive—the Icewaste Hunter is a hero to their people. We’ll make them at Tier 2.

- A longbow would give a PC a -1 to their [[Evasion]]. Let’s incorporate that into our hunter by giving them an average Difficulty of 13.
- These hardy survivors are keenly attuned to the frozen wastes. We can reflect that in their thresholds, Hit Points, and [[Stress]] by giving them the following stats: thresholds of Major 7/Severe 14, 5 Hit Points, and 4 [[Stress]].
- Hunters bring down dangerous foes from a distance, so our Ranged adversary needs a weapon that can hit hard from far away. We’ll give them a +3 to their attack.
- They should deal high damage, often Major and sometimes Severe. A longbow that deals **2d12+6** physical damage fulfills these requirements.
- Through years of training, hunters acquire skills that help them survive and use their surroundings to their advantage. We’ll reflect that in their Experiences.
- Lastly, we’ll give them a few features that build on these Experiences, like taking cover and using traps.

A Ranged adversary with these traits might look like the [[Icewaste Hunter]].

## RANGED ADVERSARIES

```base
filters:
  and:
    - kind == "adversary"
    - type == "Ranged"
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
    name: Ranged adversaries
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
