import ipywidgets as widgets
from IPython.display import display

def check(f):
	def wrapper(*args, **kwargs):
		output = widgets.Output()
		button = widgets.Button(description="Check answer")
		@output.capture(clear_output=True,wait=True)
		def _inner_check(button):
			f(*args, **kwargs)
		button.on_click(_inner_check)
		display(button, output)
	return wrapper