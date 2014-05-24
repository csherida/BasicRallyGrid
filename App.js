Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

	launch: function() {
		console.log("Our first App woot!");
		this._loadData();
	},
	
	// Get Data from Rally
	_loadData: function() {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			//Important to do autoLoad, otherwise waiting a long time
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
					console.log("get data!", myStore, myData, success);
					this._loadGrid(myStore);

				},
				//If don't change scope, the scope is left to the store, not to the app
				scope: this
			},
			fetch: ['FormattedID', 'Name', 'ScheduleState']
		});
	},
	
	// Create the Grid
	_loadGrid: function(myStoryStore) {
		var myGrid = Ext.create('Rally.ui.grid.Grid', {
		store: myStoryStore,
		columnCfgs: [
			'FormattedID', 'Name', 'ScheduleState'
			]
		});
		
		this.add(myGrid);				
		console.log('what is this? ', this);
	}
	
});
