## dash-svg

Scalable Vector Graphics (SVG) library for Plotly/Dash

## Usage

![](docs/img/dash-minimal.png)

*Dash clone of create-react-app default project*
```
import dash
from dash import html
from dash_svg import Svg, G, Path, Circle


app = dash.Dash(__name__)

app.layout = html.Div([
    html.Header([
        Svg([
            G([
                Path(d='...'),
                Circle(cx="420.9", cy="296.5", r='45.7'),
                Path(d='M520.5 78.1z')
            ], fill='#61DAFB')
        ], viewBox='0 0 841.9 595.3', className="App-logo", alt="logo"),
        html.P(["Edit ", html.Code("usage.py"), " and save to reload."]),
        html.A("Learn Dash", className="App-link", href="https://dash.plotly.com/",  target="_blank", rel="noopener noreferrer")
    ], className="App-header")
], className="App")


if __name__ == '__main__':
    app.run_server(debug=True)
```

To run demo:

    pip install dash-svg

    python usage.py

### Building the component library

    npm install
    pip install -r requirements.txt

As with the Plotly/Dash [dash_html_components] library the SVG library components
are created automatically by scraping [SVG@developer.mozilla.org]. The *./scripts*
folder contains the scripts that are used to scrape and create the SVG
component source. This step is only required if you need to
regenerate the source.

    cd ./scripts
    ./generate-all.sh
    cd ..

The generated react component source files are in *./src/lib/components*. To build the
components:

    npm run build

#### Create tarball

First change the release version in [package.json](package.json), then:

    python setup.py sdist bdist_wheel

The tarball is in *dist/dash_svg-<version>.tar.gz*

If need, you can copy and install the tarball directly in a dash project:

    pip install dash_svg-<version>.tar.gz

#### Publish

To upload the package to pypi.

    twine upload dist/*

Or to alternate repo

    twine upload -r pypicloud dist/*

## Links

* [dash_html_components]
* [SVG@developer.mozilla.org]
* [HTML@developer.mozilla.org]
* [DefinitelyTyped]

[dash_html_components]: https://github.com/plotly/dash/tree/dev/components/dash-html-components
[SVG@developer.mozilla.org]: https://developer.mozilla.org/en-US/docs/Web/SVG/Element
[HTML@developer.mozilla.org]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
[DefinitelyTyped]: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/react/index.d.ts





