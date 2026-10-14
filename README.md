<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logos/daggerheart-compatible-white-text.png">
    <img src=".github/logos/daggerheart-compatible-dark-text.png" alt="Daggerheart Compatible" width="420">
  </picture>
</p>

# DHSRD — AN OBSIDIAN VAULT FOR DAGGERHEART™ COMPATIBLE PLAY

A free, community-made [Obsidian](https://obsidian.md) vault that turns the [Daggerheart](https://www.daggerheart.com) rules into searchable, linked markdown notes: classes, ancestries, domain cards, adversaries, environments, equipment and GM guidance, with Bases for filtering and styled stat-block cards for use at the table. It was first built for digital reading in place of physical books, and is shared for free to support the Daggerheart community.

> [!note] Free and unofficial
> DHSRD is free. Please do not sell it. It is a fan project, not affiliated with, sponsored by, or endorsed by Darrington Press or Critical Role. If you enjoy it, buy the books from [Darrington Press](https://www.darringtonpress.com/daggerheart/).

If you'd like to support the work that went into DHSRD, you can [tip me on Ko-fi](https://ko-fi.com/capikaw). Tips are optional and unlock nothing: everything here stays free.

<a href="https://ko-fi.com/capikaw"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support me on Ko-fi"></a>

## Structure

Organised by what a note is, not by where it appears in the printed books. Source (`core` / `hope-and-fear` / `homebrew`) is a property, not a folder.

```
DHSRD/
├── Introduction/        Welcome, Using This Book, Book Contents (chapter openers), Hope & Fear intro
├── Rules/               Core Mechanics, Leveling Up, Player guidance, GM/ (running a game), Appendix/ (sheet contents from the books)
├── Characters/          Ancestries, Communities, Classes, Domains (landing notes + Stat Blocks/ with all 210 cards), Traits, Transformations
├── Adversaries/         Landing note, Guidance/ (choosing and using), Stat Blocks/ (one note per adversary, core + Hope & Fear)
├── Environments/        Landing note, Guidance/, Stat Blocks/ (one note per environment)
├── Equipment/           Armor/ and Weapons/ (landing notes + Stat Blocks/, one note per item), Loot/ (guides + Stat Blocks/ with all 240 items and consumables, core and Hope & Fear together)
├── Campaign Frames/     Core and Hope & Fear frames
├── World/               World overview and Core Realms
├── Locations/           Original homebrew region (Sablewood)
├── Bases.md             Landing page for every base (start here for lists)
└── Bases/               Obsidian Bases: Adversaries, Environments, Weapons, Armor, Loot, Domain Cards (one view per domain)
```

### Folder convention

Each kind of thing has the same shape: a landing note named for the plural of the thing (`Adversaries.md`, `Environments.md`, `Primary Weapons.md`, `Armor.md`), a `Guidance/` folder for how-to notes, a `Stat Blocks/` folder with one note per item, and one `_resources/` folder for its art. Hope & Fear material sits in the same notes and folders as core, labelled by the `source` property or by a "Hope & Fear" section in the landing note.

### Properties and Bases

Stat-block notes carry a few index-level properties in frontmatter (`kind`, `source`, `tier`, `type`, `difficulty`; domain cards add `domain`, `level`, `card-type`, `recall`; loot adds `rarity` and `roll` (its row in the printed random table); weapons add `slot`, `category`, `trait`, `range`, `damage`, `damage-type`, `burden`, `feature`; armor adds `major-threshold`, `severe-threshold`, `armor-score`, `feature`). The styled callout card in each note remains the canonical record. Lists such as "adversaries by tier" are Bases, not hand-built tables.

The properties are derived from the cards, so if a card changes, update its property block to match.

## Setup

1. Download this repository (**Code → Download ZIP**) or clone it with `git clone https://github.com/gpkash/DHSRD.git`.
2. In Obsidian, choose **Open folder as vault** and select the `DHSRD` folder.
3. Trust the vault when prompted (needed for community plugins to load).
4. Install the community plugins listed below if they are not already enabled.

### Community plugins used
- **Omnisearch** — full-text search across the vault.
- **Table Editor** — easier table editing.
- **Smart Connections** *(optional)* — semantic similarity between notes.
- **Folder Note Core** *(recommended)* — makes the folder note clickable as the folder's representation.

### Custom CSS snippets
Loaded automatically from `.obsidian/snippets/`:
- `adversary-cards-master.css` — styling for adversary stat-block callouts (`> [!adversary-bruiser]+`, etc.).
- `domain-cards-master.css` — styling for domain card callouts (`> [!domain-grace]+`, etc.).
- `environment-cards-master.css` — styling for environment stat-block callouts.

## Conventions

- **Headings:** one `# H1` per file, ALL CAPS to match the printed source. H2+ also ALL CAPS for primary section heads.
- **Wikilinks:** bare basename form (`[[Hope]]`, `[[Bard]]`). Disambiguated targets use suffixed names (e.g., `Hush (Card)` for the Midnight domain card vs. the Sablewood settlement).
- **Stat blocks:** Obsidian callouts (`> [!adversary-type]+ NAME`) styled by the snippets above.
- **Hubs:** a section hub (for example Core Mechanics, Action Rolls, Conditions) embeds its child notes with `![[Child]]` under a heading that links to the child, so the whole section reads on one page. The child notes keep their names, so `[[Child]]` links still work.
- **Images:** referenced via `![[name.png]]`; curated art lives in section `_resources/` folders.

## Status

Work in progress. Not yet in the vault from the printed books: the Full Example of Play, Death and Scars, the Example Character, the Chapter Five opener, the six Core campaign frames (condensed rather than full), parts of Leveling Up, and the trait Difficulty Benchmarks.

## Attribution and license

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/logos/daggerheart-compatible-white-text.png">
  <img src=".github/logos/daggerheart-compatible-dark-text.png" alt="Daggerheart Compatible" width="240">
</picture>

This product includes materials from the Daggerheart System Reference Document 1.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com. There are no previous modifications by others.

The Daggerheart System Reference Document 1.0 is licensed under the [Darrington Press Community Gaming License](https://darringtonpress.com/license). This vault modifies it: the content is reorganised into linked notes, restyled as callout cards, and given index properties and Bases. The "Daggerheart Compatible" logo is used as the license provides.

Darrington Press™ and the Darrington Press authorized work logo are trademarks of Critical Role, LLC and used with permission. Daggerheart™ is a trademark of Darrington Press, LLC.

### Content beyond the SRD

DHSRD also contains material transcribed from the Daggerheart Core Rulebook and the Hope & Fear expansion, including artwork, that is **not** Public Game Content and is **not** licensed under the DPCGL. It remains © Critical Role, LLC / Darrington Press, LLC, and all rights in it belong to them. That includes campaign frames, art, and the exact text of the rulebooks. It is included here as a free fan resource for people who own the books, and may be removed at the rights holder's request. To report a concern, [open an issue](https://github.com/gpkash/DHSRD/issues).

`Locations/` (Sablewood) is original homebrew by the maintainer.
