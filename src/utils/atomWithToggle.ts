import { WritableAtom, atom } from "jotai";

const atomWithToggle = (initialValue?: boolean,): WritableAtom<boolean, [boolean], void> => {
    const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
        const update = nextValue ?? !get(anAtom)
        set(anAtom, update)
    })

    return anAtom as WritableAtom<boolean, [boolean?], void>
}

export default atomWithToggle
