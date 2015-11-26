
def execute(command)
  puts "Running '#{command}'"
  value = %x( #{command} )
  puts value
end

task :deploy do |t|
  command = 'appcfg.py -A sy-games update .'
  value = %x( #{command} )
  puts value
end

task :local do |t|
  execute('dev_appserver.py .')
end

task :clean do |t|
  execute('find . -name "*.pyc" -exec rm -rf {} \;')
end
