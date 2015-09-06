CKEDITOR.dialog.add( 'renditionDialog', function( editor ) {
    return {
        title: 'Abbreviation Properties',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'src',
                        label: 'Source',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty." )
                    },
					{
                        type: 'text',
                        id: 'padding',
                    },
					{
						type: 'button',
						hidden: true,
						id: 'browse',
						filebrowser: 'tab-basic:src',
						label:  editor.lang.common.browseServer,
						style: 'float:right'
					}
                ]
            }
        ],
        onOk: function() {
			var dialog = this;
			
			var abbr = editor.document.createElement( 'div' );
			abbr.setAttribute( 'class', 'image' );
			
			var divInsige = editor.document.createElement( 'div' );
			divInsige.setAttribute( 'class', "rendition" );
			divInsige.setAttribute( 'style', "width:100%; padding-bottom:"+(dialog.getValueOf( 'tab-basic', 'padding' )*100)+"%;background-image:url("+dialog.getValueOf( 'tab-basic', 'src' )+")" );
			abbr.append(divInsige);
			editor.insertElement( abbr );
        }
    };
});