import user from "./navigationBarFromUser"
import menu from "./navigationMenu"
import { root } from "./navigationRoot"

export const Navigation = {
    root,
    loging: {
        menu: menu.On,
        user: user.On
    },
    noLoging: {
        menu: menu.Off,
        user: user.Off
    }
}

