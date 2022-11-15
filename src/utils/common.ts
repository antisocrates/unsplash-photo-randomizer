const pruneObject = <T extends {}>(obj: T): void => {
    Object.keys(obj).forEach(key => {
        if (!obj[key as keyof typeof obj]) {
            delete obj[key as keyof typeof obj];
        }
    });
}

export {pruneObject};