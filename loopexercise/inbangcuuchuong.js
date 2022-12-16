function inbangcuuchuong()
{
    document.write("<table border='1'>");
    for (let i = 2; i < 10; i++)
    {
        document.write("<tr>");
        for (let j = 1; j <= 10; j++)
        {
            let result = i * j;
            document.write("<td>" + i + '*' + j + '=' + result +"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
inbangcuuchuong();