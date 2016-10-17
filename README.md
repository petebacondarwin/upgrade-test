# ngUpgrade AOT playground

This project is a small app that demos ngUpgrade AOT support.

## Getting Started

* Install the dependencies

```
npm install
```

## Running the JIT version

* Watch the files and build the JIT code

```
npm run watch-jit
```

* In a separate terminal start the webserver

```
npm run start-jit
```

The files will be recompiled whenever they change

## Running the AOT distribution

* Build the AOT and start a webserver

```
npm run build-aot
```

* In a separate terminal start the webserver

```
npm run start-aot
```

The files are not watched - you will need to run `npm run build-aot` after any change.


## Notes

* Since the ngUpgrade AOT support is still in development, it has been manually copied across
into the project. See `app/upgrade/**/*`.

*