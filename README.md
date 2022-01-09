## dash-svg

SVG support library for Plotly/Dash

## Usage


## Development log

*Created vscode remote container:*

    cookiecutter cookiecutter-vscode-remote

```
{
  "cookiecutter": {
    "project_name": "dash-svg",
    "project_description": "SVG support library for Plotly/Dash",
    "workspaces_path": "/workspaces/tmp",
    "node_version": "14.x",
    "host_port": "6002",
    "_template": "cookiecutter-vscode-remote"
  }
}
```

*Created CRA test app*

    cd tmp
    npx create-react-app svg-test
    cd svg-test
    npm start

OK, all looks well. I then copied the log file `./src/logo.svg` to an embedded tag. The
logo shows as before - so react.js supports embedded svg tags.

*Create dash component template*

     cookiecutter dash-component-boilerplate

```
{
  "cookiecutter": {
    "project_name": "dash svg",
    "project_shortname": "dash_svg",
    "component_name": "DashSvg",
    "jl_prefix": "",
    "r_prefix": "",
    "author_name": "Steve Jones",
    "author_email": "jonesst2608@gmail.com",
    "github_org": "",
    "description": "SVG support library for Plotly/Dash",
    "use_async": "False",
    "license": "MIT License",
    "publish_on_npm": "False",
    "install_dependencies": "False",
    "_template": "dash-component-boilerplate"
  }
}
```

*Build example component*

    cd dash_svg
    npm install
    pip install -r requirements.txt
    npm run build

*Edit usage.py*
```
if __name__ == '__main__':
    print("*** Dash is REALLY running on http://default:6002/ ***")
    app.run_server(debug=True, host="0.0.0.0", port=5000)
```

*Run demo application*

    python usage.py

Visit [http://default:6002/](http://default:6002/)



