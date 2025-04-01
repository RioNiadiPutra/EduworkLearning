select distinct users.name as Hero , 
asd1.category_id , 
products.product_id ,
users.status as Status
from users
left join categories as asd1 on users.user_id = asd1.category_id
left join categories as asd2 on users.status = asd2.status
left join products on users.user_id = products.product_id
where asd1.category_id is not NULL
order by asd1.category_id
