type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false, value: E }