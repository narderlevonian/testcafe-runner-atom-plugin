'use babel';

export const configData = {
	'theme': {
		'title': 'Color Theme',
		'description': 'Change the display style of colors in the terminal',
		'type': 'object',
		'properties': {
			'common': {
				'title': 'Common',
				'type': 'object',
				'properties': {
					'background': {
						'title': 'Background',
						'type': 'color',
						'default': '#21252b'
					},
					'foreground': {
						'title': 'Foreground',
						'type': 'color',
						'default': '#9da5b4'
					},
					'cursor': {
						'title': 'Cursor',
						'type': 'color',
						'default': '#9da5b4'
					},
					'cursorAccent': {
						'title': 'Cursor Accent',
						'type': 'color',
						'default': '#e4e8f7'
					},
					'selection': {
						'title': 'Selection',
						'type': 'color',
						'default': '#ffffff'
					}
				}
			},
			'normal': {
				'title': 'Normal',
				'type': 'object',
				'properties': {
					'black': {
						'title': 'Black',
						'type': 'color',
						'default': '#24262c'
					},
					'red': {
						'title': 'Red',
						'type': 'color',
						'default': '#a11848'
					},
					'green': {
						'title': 'Green',
						'type': 'color',
						'default': '#4b6e00'
					},
					'yellow': {
						'title': 'Yellow',
						'type': 'color',
						'default': '#ac6e00'
					},
					'blue': {
						'title': 'Blue',
						'type': 'color',
						'default': '#007ac4'
					},
					'magenta': {
						'title': 'Magenta',
						'type': 'color',
						'default': '#8d23a6'
					},
					'cyan': {
						'title': 'Cyan',
						'type': 'color',
						'default': '#007768'
					},
					'white': {
						'title': 'White',
						'type': 'color',
						'default': '#9ea3b2'
					}
				}
			},
			'bright': {
				'title': 'Bright',
				'type': 'object',
				'properties': {
					'black': {
						'title': 'Black (Bright)',
						'type': 'color',
						'default': '#6d707b'
					},
					'red': {
						'title': 'Red (Bright)',
						'type': 'color',
						'default': '#e7005c'
					},
					'green': {
						'title': 'Green (Bright)',
						'type': 'color',
						'default': '#529900'
					},
					'yellow': {
						'title': 'Yellow (Bright)',
						'type': 'color',
						'default': '#a17700'
					},
					'blue': {
						'title': 'Blue (Bright)',
						'type': 'color',
						'default': '#00a8ff'
					},
					'magenta': {
						'title': 'Magenta (Bright)',
						'type': 'color',
						'default': '#cd00ef'
					},
					'cyan': {
						'title': 'Cyan (Bright)',
						'type': 'color',
						'default': '#00a388'
					},
					'white': {
						'title': 'White (Bright)',
						'type': 'color',
						'default': '#e4e8f7'
					}
				}
			}
		}
	},
	'font': {
		'title': 'Font Style',
		'description': 'Сhanges the display style of text in the terminal.',
		'type': 'object',
		'properties': {
			'family': {
				'title': 'Font Family',
				'description': 'List of font-family used for terminal panel text.',
				'type': 'string',
				'default': 'monospace',
				'items': {
					'type': 'string'
				}
			},
			'size': {
				'title': 'Font Size',
				'description': 'Height in pixels of terminal panel text.',
				'type': 'number',
				'default': 13
			}
		}
	},
	'preset': {
		'title': 'TestCafe Run Options',
		'description': 'Used to configure specific TestCafe options.',
		'type': 'object',
		'properties': {
			'browsers': {
				'title': 'Browsers',
				'description': 'Specifies the list of browsers where tests are run.',
				'type': 'array',
				'default': ['chrome'],
				'items': {
					'type': 'string'
				}
			},
			'hostname': {
				'title': 'Hostname',
				'description': 'Specifies your computer`s hostname. It is used when running tests in remote browsers.',
				'type': 'string',
				'default': 'localhost'
			},
			'ports': {
				'title': 'Ports',
				'description': 'Specifies custom port numbers TestCafe uses to perform testing.',
				'type': 'array',
				'default': ['1488', '1489'],
				'items': {
					'type': 'string'
				}
			},
			'speed': {
				'title': 'Speed',
				'description': 'Specifies the test execution speed.',
				'type': 'number',
				'default': 1.0,
				'minimum': 0.1,
				'maximum': 1.0,
			},
			'isLive': {
				'title': 'TestCafe in Live Mode',
				'description': 'Watches for changes you make in the test files and all files referenced in them.',
				'type': 'boolean',
				'default': false
			},
			'isColor': {
				'title': 'Force Terminal Colors',
				'description': 'Used for force colors in terminal or disable them.',
				'type': 'boolean',
				'default': true
			},
			'isDebugOnFail': {
				'title': 'Debug on fails',
				'description': 'Specifies whether to automatically enter the debug mode when a test fails.',
				'type': 'boolean',
				'default': false
			},
			'isSkipJSErrors': {
				'title': 'Skip JS Errors',
				'description': 'Used for ignore JavaScript errors.',
				'type': 'boolean',
				'default': false
			},
			'isSkipUncaughtErrors': {
				'title': 'Skip Uncaught Errors',
				'description': 'Used for forces TestCafe to ignore uncaught errors and unhandled promise rejections.',
				'type': 'boolean',
				'default': false
			},
			'isStopOnFirstFail': {
				'title': 'Stop on First Fail',
				'description': 'Used when you want to fix failed tests individually and do not need a report on all the failures.',
				'type': 'boolean',
				'default': false
			},
			'isQRCode': {
				'title': 'Show QR Code',
				'description': 'Outputs a QR-code that represents URLs used to connect the remote browsers.',
				'type': 'boolean',
				'default': false
			},
			'isDevMode': {
				'title': 'Diagnostic Mode',
				'description': 'Used to enables mechanisms to log and diagnose errors.',
				'type': 'boolean',
				'default': false
			}
		}
	}
}
