function replaceATag(str) {
	var newStr = str.replace(/<a/g, '[URL');
	return newStr.replace(/<\/a>/g, '[/URL]');
}

console.log(replaceATag('<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>'));
