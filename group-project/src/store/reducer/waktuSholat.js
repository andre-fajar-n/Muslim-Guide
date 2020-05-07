const initialStateWaktuSholat = {
    waktuSholat: [],
    tglMasehi: "",
    tglHijriyah: ""
}

export default function waktuSholatReducer(stateWaktuSholat = initialStateWaktuSholat, action) {
    switch (action.type) {
        case "GET_WAKTU_SHOLAT":
            return {
                ...stateWaktuSholat,
                waktuSholat: action.payload.timings,
                tglMasehi: action.payload.date.gregorian.date,
                tglHijriyah: action.payload.date.hijri.date
            }
        default:
            return stateWaktuSholat
    }
}