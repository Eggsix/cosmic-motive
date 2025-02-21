import {
    INCREMENT_LOADED_IMAGES, MOBILE_MENU_OFF, MOBILE_MENU_ON, MOBILE_VIEW_OFF, MOBILE_VIEW_ON,
    PAGE_TRANSITION_OFF,
    PAGE_TRANSITION_ON,
    PRELOADER_OFF,
} from "./types";

export function preloaderOff() {
    return {
        type: PRELOADER_OFF
    }
}

export function pageTransitionOn(routeTo) {
    return {
        type: PAGE_TRANSITION_ON,
        data: routeTo
    }
}

export function pageTransitionOff() {
    return {
        type: PAGE_TRANSITION_OFF
    }
}

export function incrementLoadedImages() {
    return {
        type: INCREMENT_LOADED_IMAGES
    }
}

export function mobileMenuOn() {
    return {
        type: MOBILE_MENU_ON
    }
}

export function mobileMenuOff() {
    return {
        type: MOBILE_MENU_OFF
    }
}

export function mobileViewOn() {
    return {
        type: MOBILE_VIEW_ON
    }
}

export function mobileViewOff() {
    return {
        type: MOBILE_VIEW_OFF
    }
}