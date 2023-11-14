# Page download options

You can control the download option of the book in two ways:
 - Disabling downloading using cell tags `disable-download-page`
 - Add / replace download link with custom link using `spinhx-download-link-replacer`

## Disabling download
If you add `disable-download-page` as a cell tag to a cell in a python notebook, the download button ({fa}`download`) will disappear from the topright corner. The cell tag can be added to any code cell in the notebook. This function might be handy if your page includes code which you don't want the students to see. Be aware that this also removes the option to download a PDF of the page.

## Add/replace download link
The download link {fa}`download` -->  {fa}`file`{guilabel}`.ipynb` can be replaced by using the following code in any markdown / notebook file:
````md
```{custom_download_link} <link_target>
:text: "Custom text"
:replace_default: "True"
```
````

An explanation of the options of this command is given on https://gitlab.tudelft.nl/mude/sphinx-download-link-replacer. This extension can be downloaded by running

`pip install git+https://gitlab.tudelft.nl/mude/sphinx-download-link-replacer`

A potential application of this functionality is when creating a page in which students have to do some coding. Downloading the page allows the student to save their work and work with their local environment. However, the original source file might include code (jupyterbook formatting, widgets, answers) which is not necessary for students. You can make a copy of the notebook file without these elements and replace the {fa}`file`{guilabel}`.ipynb` link to this custom notebook file. Furthermore, you can add any additional data as an additional {fa}`file`{guilabel}`.zip` file. 


### Installation instructions
To make use of this functionality, you have to install the `download_link_replace` package by running the following line in your command line:
```
git+https://gitlab.tudelft.nl/mude/sphinx-download-link-replacer
```

Furthermore, you should add the following line to `requirements.txt`
```
download_link_replacer @ git+https://gitlab.tudelft.nl/mude/sphinx-download-link-replacer
```
and to `_config.yml`:
```
sphinx:
  extra_extensions:
    - download_link_replacer
```