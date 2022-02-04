# dash-svg

![](https://raw.githubusercontent.com/stevej2608/dash-svg/master/docs/img/dash-minimal.png)

Scalable Vector Graphics (SVG) library for [Plotly/Dash](https://dash.plotly.com/)

Dash clone of the ubiquitous *create-react-app* default project,
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

## Installation

You can install *dash-svg* with `pip`:

```
pip install dash-svg
```

## Documentation

Head over to the [*README*][docs-homepage] for more details.

## Contributing

The source code for *dash-svg* is available
[on GitHub][dash-svg-repo]. If you find a bug or something is unclear, we encourage
you to raise an issue. We also welcome contributions, to contribute, fork the
repository and open a [pull request][dash-svg-pulls].


[dash-homepage]: https://dash.plot.ly/
[dash-svg-repo]: https://github.com/stevej2608/dash-svg
[docs-homepage]: https://github.com/stevej2608/dash-svg/blob/master/README.md
[dash-svg-pulls]: https://github.com/stevej2608/dash-svg/pulls
