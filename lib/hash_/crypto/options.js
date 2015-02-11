
define({
	hexcase :  0,  
	b64pad  : '', 
	charset :  8  
});

/**
* 十六进制编码字符格式。为 0 则使用小写字母。为 1 则使用大写字母。
* @access public
* @var {number|boolean} [Sumi.Crypto.hexcase=0]
*/

/**
* 指定 base-64 编码格式填充字符。"=" 则严格遵守 RFC 文档。默认值为空。
* @access public
* @var {string} Sumi.Crypto.b64pad
*/

/**
* 输入文本的字符集格式。为 8 则认定为 ASCII 字符集。为 16 则认定为 Unicode 字符集。
* @access public
* @var {number} [Sumi.Crypto.charset=8]
*/
