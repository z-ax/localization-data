@trenskow/localization-data
----

# Introduction

An extension to [countries-list](https://npmjs.org/packages/countries-list) that does also contain scripts and associates languages with their corresponding available scripts (ISO 15924).

## Example

````javascript
    {
        "continents": {
            // [ see countries-list package ]
        },
        "countries": {
            // [ see countries-list package ]
        },
        "languages": {
            "af": {
                "name": "Afrikaans",
                "native": "Afrikaans",
                "scripts": {
                    "Latn": {
                        "countries": [
                            "NA",
                            "ZA"
                        ]
                    }
                },
                "primaryScript": "Latn"
            },
            "am": {
                "name": "Amharic",
                "native": "አማርኛ",
                "scripts": {
                    "Ethi": {
                        "countries": [
                            "ET"
                        ]
                    }
                },
                "primaryScript": "Ethi"
            },
            // ...
            "zu": {
                "name": "Zulu",
                "native": "isiZulu",
                "scripts": {
                    "Latn": {
                        "countries": [
                            "ZA"
                        ]
                    }
                },
                "primaryScript": "Latn"
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
            // ....
            "Latn": {
                "no": "215",
                "name": "Latin",
                "direction": "lr"
            },
            // ....
            "Yezi": {
                "no": "192",
                "name": "Yezidi",
                "direction": "rl"
            },
            "Yiii": {
                "no": "460",
                "name": "Yi",
                "direction": "lr"
            }
        }
    }
````

# Data sources

* [https://en.wikipedia.org/wiki/ISO_15924](https://en.wikipedia.org/wiki/ISO_15924)
* [https://github.com/unicode-org/cldr/blob/master/common/supplemental/supplementalData.xml](https://github.com/unicode-org/cldr/blob/master/common/supplemental/supplementalData.xml)

# Contributing

* `/dist` contains the generated and served data.
* `/generator` contains the source and generator scripts.

# LICENSE

Copyright 2020 Kristian Trenskow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
