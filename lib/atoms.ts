import { atom } from "jotai"

export const jsEventCountAtom = atom<number>(0)

export const renderEventCountAtom = atom<number>(1)

export const showingRenderingAnimationAtom = atom<boolean>(false)
