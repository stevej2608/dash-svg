import dash_svg
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_svg.DashSvg(
        id='input',
        value='my-value',
        label='my-label'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)

if __name__ == '__main__':
    print("*** Dash is REALLY running on http://default:6002/ ***")
    app.run_server(debug=True, host="0.0.0.0", port=5000)