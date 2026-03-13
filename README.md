## Project Title

A2_Group8B_MidTermGame: Kiwi's Delivery Service

---

## Group Number

Group 8B

---

## Description

> You play as a kiwi, a flightless bird on a mission to be the best mailbird.
> Traverse through levels and move around using WASD to deliver packages to other critters.
> Interact with the environment using 'E' to receive and deliver packages.
> Balance packages carefully to not accidentally "lose" them in transit.
> Race to complete your deliveries on time, scoring well and beating your best times.

---

## Setup and Interaction Instructions

Describe how to use or play your project.

- How does the user start?
- What controls or keys do they use?
- Any important visual or audio feedback to watch for?

> Use `WASD` to move around and `W/SpaceBar` to jump.
> Press `E` to interact with the environment.
> Interact with the postoffice to deploy a package.
> Interact with the recipient to deliver a package.
> Press `R` to reset the level and your time.
> Click with the mouse to navigate on-screen menus.

---

## Iteration Notes (Post-Playtest)

<!-- **** -->

Summary of findings

Players found most confusion when it came to package pickup and drop-off. There was uncertainty regarding where the pickup area was, and what button to press to receive a new package. Players were unsure what to do if a package broke. Instead of going back to the pickup area like we had planned, they asked if they could restart. Players found it tedious having to walk back to the package pickup area try again.

Movement in general was picked up quite fast. Packages broke most often when they were jumping sideways. However, as they broke more packages, players would naturally make adjustments to how they moved and navigated obstacles in consideration of the package's physics. They did, however, find the movement to be quite slow.

Players were quite entertained by the package physics, creating a social experience where they often laughed or shouted whenever the package would go up in the air or break. They'd also start challenging each other to try to find out how to complete the level as fast as possible, creating a competitive incentive to replay the level.

Concrete changes

    1. We plan on implementing a reset button, allowing players to retry a level instantly. To make players aware of this feature, we will add text in the top left corner naming it and its key bind.

    2. Since players found the movement to be slow and tedious, we will be increasing player movement speed, while also taking package physics into account.

    3. To encourage players to replay levels to achieve faster completion times, we plan to use cookies to add a “best time” feature.

---

## Iteration Notes (Post-Showcase)

<!-- **** -->

Summary of findings

Players found the tutorial level to be too difficult. They were confused how they were supposed to pick up a package, skipping over the post office and proceeding to the delivery location. When told they had to pick up a package, they did not know what button to press to receive a package. They kept pressing the button, receiving multiple packages, not knowing they were supposed to carry them one at a time. Players were confused by the star scoring system and were unsure what the numbers within the stars meant. Players become apprehensive when the package breaks, only making the game harder.

Concrete changes

    1. To clarify objectives (the package pickup and delivery areas), we will add dynamic arrows to point to their locations. If the player does not have a package, it will point to the package pickup location. If the player does have a package, it will point to the delivery area.

    2. To make it clearer how to interact with the package pickup and delivery areas, we will add a visual key bind popup when players are near eithers’ hitboxes (hover-over instructions.

    3. Disable the ability to pick up packages if one is already in play.

    4. Change the current tutorial level to a later level instead, replacing it with a much easier one.

    5. Reward smooth movement in early level designs.

---

## Assets

> - `background_main.webp` (created in SketchBook, Original artwork)
> - `background_overlay.webp` (created in SketchBook, Original artwork)
> - `bat_house.webp` (created in Clip Studio Paint, Original artwork)
> - `mail_pickup.webp` (created in Clip Studio Paint, Original artwork)
> - `grass_tile.png` (created in SketchBook, Original artwork)
> - `dirt_tile.png` (created in SketchBook, Original artwork)
> - `water_tile.webp` (created in SketchBook, Original artwork)
> - `platform_tile.png` (created in SketchBook, Original artwork)
> - `title_screen.png` (created in SketchBook, Original artwork)
> - `tree_base.png` (created in SketchBook, Original artwork)
> - `tree_mid.png` (created in SketchBook, Original artwork)
> - `tree_full.png` (created in SketchBook, Original artwork)
> - `kiwi_spritesheet.png` (created in SketchBook, Original artwork)

---

## References

### In-text

> `[1]` p5js.org. Star - example | p5.js. p5js.org. Retrieved March 12, 2026 from https://archive.p5js.org/examples/form-star.html

### Inspiration

> Rodrigo Monteiro. 2012. Title. (May 2012). Retrieved March 12, 2026 from http://higherorderfun.com/blog/2012/05/20/the-guide-to-implementing-2d-platformers/
> q5play.org. 2023. Platformer | p5play. Game [Web Browser]. (17 March 2023). q5play.org.

### Research

Achondroplasia | Boston Children’s Hospital. Retrieved March 9, 2026 from https://www.childrenshospital.org/conditions-treatments/achondroplasia

Congenital Limb Differences | Boston Children’s Hospital. Retrieved March 9, 2026 from https://www.childrenshospital.org/conditions-treatments/congenital-limb-differences

Health Social Sciences. LibGuides: Limb Difference: Home. Retrieved March 11, 2026 from https://guides.library.illinois.edu/c.php?g=651961&p=4573025

Leen Jabban, Benjamin W. Metcalfe, Jonathan Raines, Dingguo Zhang, and Ben Ainsworth. 2022. Experience of adults with upper-limb difference and their views on sensory feedback for prostheses: a mixed methods study. J Neuroeng Rehabil 19, (July 2022), 80. https://doi.org/10.1186/s12984-022-01054-y

---
