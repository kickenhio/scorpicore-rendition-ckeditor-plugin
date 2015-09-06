CKEDITOR.plugins.add( 'rendition', {
    icons: 'rendition',
    init: function( editor ) {
        editor.addCommand( 'rendition', new CKEDITOR.dialogCommand( 'renditionDialog' ) );
        editor.ui.addButton( 'Rendition', {
            label: 'Insert Rendition',
            command: 'rendition',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'renditionDialog', this.path + 'dialogs/rendition.js' );
    }
});