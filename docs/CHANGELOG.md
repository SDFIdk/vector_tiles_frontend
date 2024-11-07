# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/).

## [3.0.0] - 2024-11-07

### Added

- Added a MapLibre version of the application, `/mapLibre`.

## [2.2.1] - 2024-11-07

### Fixed

- No longer incorrectly adds a new layer if one with the same name already exists.

## [2.2.0] - 2024-10-31

### Added

- Added a feature to delete saved styles.

## [2.1.0] - 2024-10-30

### Added

- Added a feature to save styles to local storage.

## [2.0.1] - 2024-10-29

### Changed

- Changed check for whether or not to add the custom tileloadfunction based on the URL containing `api.dataforsyningen.dk`.

## [2.0.0] - 2024-10-28

### Added

- Added resolutions to the config to fix incorrect coordinates. Remember to update your local `config.js` with a resolutions option.

### Changed

- Changed how styles are added to the openlayers map. They no longer share a source, but instead read the source from the stylefile.

## [1.0.0] - 2024-10-07

### Added

- Moved projection, extent, center, zoom and maxZoom to the config file. Remember to update your local `config.js` with the new options.

### Changed

- Updated Openlayers from v9 to v10.

## [0.4.0] - 2024-09-13

### Changed

- Updated the API url. Remember to update your local `config.js` with the updated url.

## [0.3.0] - 2024-09-04

### Changed

- Updated name from SDFI to KDS.
- Rename `styles/sdfi` folder to `styles/official`.
- Added `official` and `custom` subfolders to `sprites`.

## [0.2.0] - 2024-07-11

### Fixed

- Incorrect resolution causing all zoom levels to be wrong. Zoom levels in stylefiles should now correctly match the actual zoom levels in the map. Old style files will need to be updated with new zoom levels.
