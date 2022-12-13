function println()
{
    document.write("<table>");
    for (let i = 1; i <= 10; i++)
    {
        document.write("<tr>");
        for (let j = i; j <= 10 * i; j = j + i)
        {
            document.write("<td>"+j+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
println();