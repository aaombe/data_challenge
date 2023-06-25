# Abandoned property data

Ref: https://github.com/dssg/land-bank


## The problem: vacant and abandoned property
These abandoned homes can lower property values, serve as magnets for crime and decay, and reduce tax revenues.

## The solution: analytics web tool to target properties
1. Build a usable web interface for both public use that interfaces with a Postgres database in order to organize, query, and access the data in a convenient manner.
2. Create...

## The data: property and building data from Onondaga County and the City of Syracuse
- Property data from city of syracuse
- [identify more data source]


## Project layout
- `analysis`: exploratory data analsys of real estate and demographic tends in Onondaga County.
- `web`: a react app that implements the analytics tool and a data API backend to power this tool.

## Installation guide

Here's the software you'll need to install:

- Postgres 9.1
- Python 3.6.x
- FastApi


Next, clone the repository and configure <TBD>, and to interface with your Postgres database.

Then, run an initial South migration to create database tables/views:

```
$ python 
```

## Team

Coming soon ...

## Contributing to the project

Coming soon ...
## License 

Copyright (C) 2013 [Data Science for Social Good Fellowship at the University of Chicago](http://dssg.io)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
