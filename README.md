1. Sử dụng getStaticProps (SSG - Static Site Generation)
getStaticProps là một hàm đặc biệt của Next.js, chỉ chạy ở server-side khi bạn build ứng dụng (lệnh next build). Hàm này dùng để lấy dữ liệu và render trang một cách tĩnh. Trang được tạo ra sẽ không thay đổi sau khi build, trừ khi bạn build lại hoặc thiết lập tái tạo lại (revalidation).

Khi nào nên dùng getStaticProps:

Khi dữ liệu không cần thay đổi thường xuyên (VD: dữ liệu về sản phẩm, blog,...).
Khi muốn tối ưu hóa hiệu suất, vì Next.js sẽ tạo ra trang tĩnh sẵn sàng trả về ngay lập tức.
Khi trang cần tối ưu cho SEO vì trang tĩnh sẽ được lập chỉ mục dễ dàng.


2. Sử dụng getServerSideProps (SSR - Server Side Rendering)
getServerSideProps cũng là một hàm chạy phía server, nhưng khác với getStaticProps, nó chạy mỗi lần có yêu cầu từ người dùng. Điều này có nghĩa là mỗi khi người dùng tải lại trang, getServerSideProps sẽ fetch dữ liệu mới và render trang theo yêu cầu.

Khi nào nên dùng getServerSideProps:

Khi cần dữ liệu luôn luôn mới, như dữ liệu thời gian thực hoặc dữ liệu thay đổi thường xuyên.
Khi dữ liệu phụ thuộc vào user, như là dashboard, thông tin người dùng,...

3. Sử dụng useEffect để fetch dữ liệu phía client
useEffect là một hook chạy ở phía client, thường được sử dụng để fetch dữ liệu sau khi trang đã render. Phương pháp này không tối ưu cho SEO vì nội dung được fetch sau khi trang tải xong, nhưng rất tiện khi không muốn server phải fetch dữ liệu và chỉ cần client xử lý.

Khi nào nên dùng useEffect để fetch dữ liệu:

Khi dữ liệu không cần thiết phải tải trước cho SEO.
Khi dữ liệu thay đổi thường xuyên, hoặc phụ thuộc vào các hành động từ người dùng.