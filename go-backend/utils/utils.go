package utils

func StringToUint(str string) (uint, error) {
	var num uint
	err := strconv.ParseUint(str, 10, 32)
	if err != nil {
		
	return num, nil
}
