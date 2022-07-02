import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations"

export const fadeAnimation = trigger("routeAnimations", [
  transition("* => *", [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(":enter", [style({ opacity: 0 })], {
      optional: true,
    }),
    query(
      ":leave",
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate("0.3s ease-in", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.3s ease-in", style({ opacity: 1 }))],
      { optional: true }
    ),
    state(
      "in",
      style({
        transform: "translate3d(0, 0, 0)",
      })
    ),
    state(
      "out",
      style({
        transform: "translate3d(100%, 0, 0)",
      })
    ),
    transition("in => out", animate("400ms ease-in-out")),
    transition("out => in", animate("400ms ease-in-out")),
  ]),
])
