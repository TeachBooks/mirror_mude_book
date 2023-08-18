import importlib.abc 
import importlib.machinery
import importlib.util

import sys
import os

# Finds modules by stupidly fetching from the server
class FetchPathFinder(importlib.abc.MetaPathFinder):
	@classmethod
	def find_spec(cls, fullname, path, target=None):
		if path is None:
			path = os.getcwd()
		for suffix in importlib.machinery.SOURCE_SUFFIXES:
			fullpath = os.path.join(path, fullname + suffix)
			
			try:
				# This will cause a lazy load from the server
				open(fullpath, "r").close()
			except:
				continue

			loader = importlib.machinery.SourceFileLoader(fullname, fullpath)
			return importlib.util.spec_from_loader(fullname, loader=loader)
		return None

sys.meta_path.append(FetchPathFinder)