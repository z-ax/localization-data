@trenskow/localization-data
----

# Introduction

An extension to [countries-list](https://npmjs.org/packages/countries-list) that does also contain scripts and associates languages with their corresponding available scripts.

## Example

````json
    {
        "continents": {
            [ see countries-list package ]
        },
        "countries": {
            [ see countries-list package ]
        },
        "languages": {
            "ar": {
                "name": "Arabic",
                "native": "العربية",
                "scripts": {
                    "Arab": {
                        "countries": [
                            "AE",
                            "BH",
                            "DJ",
                            ...
                            "TD",
                            "TN",
                            "YE"
                        ]
                    },
                    "Syrc": {
                        "countries": [
                            "IR",
                            "SS"
                        ],
                        "secondary": true
                    }
                }
            },
            ...
            "uk": {
                "name": "Ukrainian",
                "native": "Українська",
                "scripts": {
                    "Cyrl": {
                        "countries": [
                            "UA"
                        ]
                    }
                }
            }
        },
        "scripts": {
            "Adlm": {
                "no": "166",
                "name": "Adlam",
                "direction": "rl"
            },
            "Afak": {
                "no": "439",
                "name": "Afaka",
                "direction": "lr"
            },
            "Arab": {
                "no": "160",
                "name": "Arabic",
                "direction": "rl"
            },
            ....
            "Latn": {
                "no": "215",
                "name": "Latin",
                "direction": "lr"
            },
            ....
            "Zinh": {
                "no": "994",
                "name": "Code for inherited script",
                "direction": "lr"
            },
            "Zmth": {
                "no": "995",
                "name": "Mathematical notation",
                "direction": "lr"
            }
        }
    }
````

# LICENSE

Copyright 2020 Kristian Trenskow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
