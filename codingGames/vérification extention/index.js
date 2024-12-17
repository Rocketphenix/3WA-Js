const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

// Dictionnaire des exceptions pour certaines extensions communes
const specialMIMEtoExt = {
    'audio/mpeg': ['mp3'],
    'audio/x-wav': ['wav'],
    'audio/ogg': ['ogg'],
    'audio/webm': ['weba'],
    'audio/flac': ['flac'],
    'audio/aac': ['aac'],
    'video/mp4': ['mp4'],
    'video/webm': ['webm'],
    'video/avi': ['avi'],
    'video/mpeg': ['mpg', 'mpeg'],
    'image/jpeg': ['jpg', 'jpeg'],
    'image/png': ['png'],
    'image/gif': ['gif'],
    'image/bmp': ['bmp'],
    'image/tiff': ['tiff'],
    'image/svg+xml': ['svg'],
    'application/pdf': ['pdf'],
    'application/zip': ['zip'],
    'application/x-rar-compressed': ['rar'],
    'application/x-tar': ['tar'],
    'application/x-gzip': ['gz'],
    'application/x-7z-compressed': ['7z'],
    'application/json': ['json'],
    'application/javascript': ['js'],
    'application/xml': ['xml'],
    'text/html': ['html', 'htm'],
    'text/css': ['css'],
    'text/plain': ['txt'],
    'text/csv': ['csv'],
    'text/xml': ['xml'],
    'application/msword': ['doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['docx'],
    'application/vnd.ms-excel': ['xls'],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['xlsx'],
    'application/vnd.ms-powerpoint': ['ppt'],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['pptx'],
    'application/epub+zip': ['epub'],
    'application/x-font-woff': ['woff'],
    'application/x-font-woff2': ['woff2'],
    'application/font-otf': ['otf'],
    'application/font-ttf': ['ttf'],
    'application/vnd.ms-excel.sheet.macroenabled.12': ['xlsm'],
    'application/vnd.ms-word.document.macroenabled.12': ['docm'],
    'application/x-shockwave-flash': ['swf'],
    'application/x-msdownload': ['exe'],
    'application/x-javascript': ['js'],
    'application/vnd.android.package-archive': ['apk'],
    'application/x-java-archive': ['jar'],
    'application/x-ruby': ['rb'],
    'application/x-python': ['py'],
    'application/x-perl': ['pl'],
    'application/x-php': ['php'],
    'application/x-c': ['c'],
    'application/x-c++': ['cpp'],
    'application/x-latex': ['tex'],
    'application/x-msi': ['msi'],
    'application/x-x509-ca-cert': ['cer', 'crt'],
    'application/x-bzip2': ['bz2'],
    'application/x-rar': ['rar'],
    'application/x-tar': ['tar'],
    'application/x-gzip': ['gz'],
    'application/vnd.mozilla.xul+xml': ['xul'],
    'application/x-sh': ['sh'],
    'application/vnd.ms-access': ['mdb'],
    'application/vnd.oasis.opendocument.text': ['odt'],
    'application/vnd.oasis.opendocument.spreadsheet': ['ods'],
    'application/vnd.oasis.opendocument.presentation': ['odp'],
    'application/vnd.sun.xml.writer': ['sxw'],
    'application/vnd.sun.xml.calc': ['sxc'],
    'application/vnd.sun.xml.impress': ['sxi'],
    'application/x-bzip': ['bz'],
    'application/x-xpinstall': ['xpi'],
    'application/rtf': ['rtf'],
    'application/atom+xml': ['atom'],
    'application/x-font-ttf': ['ttf'],
    'application/x-font-otf': ['otf'],
    'application/x-msdos-program': ['exe'],
    'application/x-msdownload': ['exe'],
    'application/x-www-form-urlencoded': ['urlencoded'],
    'application/ics': ['ics'],
    'application/vnd.ms-pki.certstore': ['sst'],
    'application/vnd.ms-pki.stl': ['stl'],
    'application/vnd.ms-pki.pko': ['pko'],
    'application/vnd.ms-pki.spc': ['spc'],
    'application/x-archive': ['ar'],
    'application/x-diskcopy': ['dsk'],
    'application/x-executable': ['exe'],
    'application/x-compressed': ['tar.gz'],
    'application/x-mimearchive': ['eml'],
    'application/pgp-encrypted': ['pgp'],
    'application/x-pem-file': ['pem'],
    'application/x-shar': ['shar'],
    'application/ogx': ['ogx'],
    'application/vnd.fujitsu.oasys': ['oas'],
    'application/vnd.ms-wpl': ['wpl'],
    'application/vnd.ms-cab-compressed': ['cab'],
    'application/asp': ['asp'],
    'application/vnd.apple.installer+xml': ['pkg'],
    'application/vnd.ms-cab-compressed': ['cab'],
    'application/mspowerpoint': ['ppt'],
    'application/rtf': ['rtf'],
    'application/EDI-X12': ['edi'],
    'application/pdf': ['pfd'],
    'application/EDIFACT': ['edf'],
    'application/octet-stream': ['exe', 'bin', 'dll', 'dat', 'app', 'elf'], 
    'image/vnd.microsoft.icon': ['ico'],
    'audio/vnd.rn-realaudio': ['ra', 'rm'],
    'video/x-ms-wmv': ['wmv'],
    'video/x-msvideo': ['avi'],
    'application/xhtml+xml': ['xhtml'],
    'video/x-flv': ['flv'],
    'application/vnd.oasis.opendocument': ['odt', 'ods', 'odp', 'odg', 'odf', 'odb'],
    'video/quicktime': ['qt'],
    'audio/x-ms-wma': ['wma'],
    // Ajouter d'autres correspondances spéciales si nécessaire
};

let failType = [];
if(!filesType){
    var filesType = [];
    for (let i = 0; i < N; i++) {
        var inputs = readline().split(' ');
        const EXT = inputs[0].toLowerCase(); // file extension
        const MT = inputs[1]; // MIME type.

        //console.error(inputs);

        // Vérifier si le type MIME est dans la liste des correspondances spéciales
        if (specialMIMEtoExt[MT] && specialMIMEtoExt[MT].includes(EXT)) {
            filesType.push([MT, EXT]); // Si elles correspondent, ajouter au tableau
        } else {
            // Extraire l'extension du type MIME
            const extractedExt = extractExtensionFromMIME(MT);

            // Comparer l'extension extraite avec celle fournie
            if (extractedExt === EXT) {
                filesType.push([MT, EXT]); // Si elles correspondent, ajouter au tableau
            } else {
                //failType.push([[MT, EXT]]);
                filesType.push(["UNKNOWN", "UNKNOWN"]);
            }
        }
    }
}

function extractExtensionFromMIME(MIME) {
    const mimeParts = MIME.split('/');
    if (mimeParts.length > 1) {
        // Prendre la deuxième partie du MIME comme une extension possible
        const ext = mimeParts[1].split(';')[0].toLowerCase();
        return ext;
    }
    return null;
}


//console.error(failType);
//console.error(filesType);

var resultTab = [];
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.

    let FNAMEMini = FNAME.toLowerCase();

    //console.error(FNAMEMini);

    let exist = filesType.filter(ext => FNAMEMini.endsWith("." + ext[1])).map(ext => ext[0])

    //console.error(exist);
    if(exist.length > 0){
        resultTab.push(exist[0]);
    } else {
        resultTab.push("UNKNOWN");
    }
}
//console.error(resultTab);

//console.error("-----------------");

resultTab.forEach(phrase => console.log(phrase));
